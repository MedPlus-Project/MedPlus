import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import DeleteSymptomModal from "../../modals/DeleteSymptomModal";
import EditSymptomModal from "../../modals/EditSymptomModal";
import { DeleteIcon, EditIcon, SearchIcon } from "../../icons/icon";
import { TextInputWithLabel as TextInput } from "../../components/FormikElements";

import {
  useLazyGetUsersQuery,
  useMakeAdminMutation,
} from "../../services/userService";
import { userRoles } from "../../utils/userRoles";

const Users = () => {
  const [searchUsers, setSearchUsers] = useState("");
  // const [editSymptomModalOpen, setEditSymptomModalOpen] = useState(false);
  // const [editModalSymptom, setEditModalSymptom] = useState(null);
  // const [deleteSymptomModalOpen, setDeleteSymptomModalOpen] = useState(false);
  // const [deleteModalSymptom, setDeleteModalSymptom] = useState(null);
  // const [clickedSymptom, setClickedSymptom] = useState(null);

  const [
    fetchUsers,
    {
      isSuccess: isSuccessUsers,
      data: usersData,
      isError: isErrorUsers,
      error: userError,
      isFetching: isFetchingUsers,
    },
  ] = useLazyGetUsersQuery();

  const [makeAdmin, { error: makeAdminError, isLoading: isLoadingmakeAdmin }] =
    useMakeAdminMutation();

  const handleMakeAdmin = async (id) => {
    const res = await makeAdmin({ id: id });

    if (res?.data?.status) {
      toast.success("User upgraded to admin successfully");
    }
  };

  // const closeEditSymptomModal = () => {
  //   setEditSymptomModalOpen(false);
  // };

  // const openEditSymptomModal = (symptom) => {
  //   setEditModalSymptom(symptom);
  //   setEditSymptomModalOpen(true);
  // };

  // const closeDeleteSymptomModal = () => {
  //   setDeleteSymptomModalOpen(false);
  // };

  // const openDeleteSymptomModal = (symptom) => {
  //   setDeleteModalSymptom(symptom);
  //   setDeleteSymptomModalOpen(true);
  // };

  // useEffect(() => {
  //   clickedSymptom && fetchAssociatedDiseases({ id: clickedSymptom._id });
  // }, [clickedSymptom]);

  useEffect(() => {
    fetchUsers({
      fixedCacheKey: "users",
    });
  }, [fetchUsers]);

  const filteredUsers =
    isSuccessUsers &&
    usersData.data.filter((user) => {
      return user.userName.includes(searchUsers);
    });

  return (
    <div className="flex w-full gap-5">
      <div className="flex w-full flex-col items-end">
        <div className="mb-5 flex gap-2">
          <input
            className="rounded-lg border border-grey p-2 outline-none"
            onChange={(e) => setSearchUsers(e.target.value)}
            value={searchUsers}
          />
          <div className="w-max rounded-lg bg-teal p-2">
            <SearchIcon className="text-white" />
          </div>
        </div>
        <div className="flex max-h-96 w-full flex-col gap-3 overflow-y-auto">
          {isSuccessUsers &&
            filteredUsers.map((user) => (
              <div
                className="grid w-full cursor-pointer grid-cols-3 gap-1 rounded-xl bg-lightGrey p-3"
                key={user._id}
              >
                <div className="">
                  <p className="font-semibold capitalize">{user.userName}</p>
                  <p className="">{user.email}</p>
                </div>
                <div className="h-max w-max rounded-xl bg-mintGreen px-3 py-0.5">
                  <p className="">{user.role}</p>
                </div>
                <div className="flex items-start justify-end">
                  {!(user.role === userRoles.ADMIN) && (
                    <button
                      className="cursor-pointer rounded-xl bg-red/75 px-3 py-0.5"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      <p className="text-white">make admin</p>
                    </button>
                  )}
                </div>
              </div>
            ))}
          {/* {editModalSymptom && (
            <EditSymptomModal
              isModalOpen={editSymptomModalOpen}
              modalClose={closeEditSymptomModal}
              symptom={editModalSymptom}
            />
          )}
          {deleteModalSymptom && (
            <DeleteSymptomModal
              isModalOpen={deleteSymptomModalOpen}
              modalClose={closeDeleteSymptomModal}
              symptom={deleteModalSymptom}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Users;
