import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, editUser, searchUser, updateUser } from "../store/actions";

class DanhSach extends Component {
  state = {
    search: "",
    arrSearch: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(searchUser(this.state.search));
    // let searchName = this.state.search.toLowerCase();
    // const data = [...this.props.mangSinhVien];
    // let result = data.filter((item) =>
    //   item.hoTen.toLowerCase().includes(searchName)
    // );
    // // console.log(result);
    // this.setState({
    //   arrSearch: result,
    // });
  };
  render() {
    // console.log(this.state.arrSearch);
    // console.log(this.state.search);
    const { mangSinhVien, searchUser } = this.props;
    return (
      <div className="mt-5">
        <h1 className="capitalize text-3xl text-white bg-black p-4 font-bold">
          danh sách sinh viên
        </h1>
        <form onSubmit={this.handleSubmit} className="relative w-1/3">
          <input
            type="text"
            className="p-2 mt-2 border-2 rounded-sm border-gray-200 outline-none focus:border-blue-500 w-full"
            placeholder="Search..."
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button className="absolute top-[16px] right-[15px]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <table className="min-w-full text-xs mt-4">
          <thead className="bg-gray-300">
            <tr className="text-left text-[16px]">
              <th className="p-3">Mã SV </th>
              <th className="p-3">Họ tên</th>
              <th className="p-3">Số điện thoại</th>
              <th className="p-3">Email</th>

              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {searchUser
              ? searchUser.map((item) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 text-[18px] "
                      key={item.maSV}
                    >
                      <td className="p-3">{item.maSV}</td>
                      <td className="p-3">{item.hoTen}</td>
                      <td className="p-3">{item.phoneNumber}</td>
                      <td className="p-3">{item.email}</td>
                      <td>
                        <button
                          className="p-3 bg-red-500 text-white hover:bg-red-700 mr-4"
                          onClick={() =>
                            this.props.dispatch(deleteUser(item.maSV))
                          }
                        >
                          Xóa
                        </button>
                        <button
                          className="p-3 bg-yellow-500 text-white hover:bg-yellow-700"
                          onClick={() =>
                            this.props.dispatch(editUser(item.maSV))
                          }
                        >
                          Sửa
                        </button>
                      </td>
                    </tr>
                  );
                })
              : mangSinhVien.map((item) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 text-[18px] "
                      key={item.maSV}
                    >
                      <td className="p-3">{item.maSV}</td>
                      <td className="p-3">{item.hoTen}</td>
                      <td className="p-3">{item.phoneNumber}</td>
                      <td className="p-3">{item.email}</td>
                      <td>
                        <button
                          className="p-3 bg-red-500 text-white hover:bg-red-700 mr-4"
                          onClick={() =>
                            this.props.dispatch(deleteUser(item.maSV))
                          }
                        >
                          Xóa
                        </button>
                        <button
                          className="p-3 bg-yellow-500 text-white hover:bg-yellow-700"
                          onClick={() =>
                            this.props.dispatch(editUser(item.maSV))
                          }
                        >
                          Sửa
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return { ...rootReducers.btForm };
};
export default connect(mapStateToProps)(DanhSach);
