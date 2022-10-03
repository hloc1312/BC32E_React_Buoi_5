import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SEARCH_USER,
  UPDATE_USER,
} from "../types";

const stateDefault = {
  mangSinhVien: [
    {
      maSV: "1",
      hoTen: "Nguyễn Hoàng Lộc",
      phoneNumber: "01234566789",
      email: "hloc878@gmail.com",
    },
  ],
  selectedUer: null,
  searchUser: null,
};

export const btForm = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      const data = [...state.mangSinhVien, payload];

      return { ...state, mangSinhVien: data };
    }
    case DELETE_USER: {
      const data = state.mangSinhVien.filter((item) => item.maSV !== payload);

      return { ...state, mangSinhVien: data };
    }
    case EDIT_USER: {
      const user = state.mangSinhVien.find((item) => item.maSV === payload);

      return { ...state, selectedUer: user };
    }
    case UPDATE_USER: {
      // const newMangSinhVien = state.mangSinhVien.map((item) =>
      //   item.maSV === payload.maSV ? payload : item
      // );

      const data = [...state.mangSinhVien];
      const index = state.mangSinhVien.findIndex(
        (item) => item.maSV === payload.maSV
      );
      data[index] = payload;
      state.selectedUer = null;
      return {
        ...state,
        mangSinhVien: data,
      };
    }
    case SEARCH_USER: {
      const data = [...state.mangSinhVien];
      const search = data.filter((item) =>
        item.hoTen.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, searchUser: search };
    }
    default:
      return state;
  }
};
