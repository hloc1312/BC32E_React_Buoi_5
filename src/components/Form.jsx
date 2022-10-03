import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, updateUser } from "../store/actions";

class Form extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      phoneNumber: "",
      email: "",
    },
    errors: {},
  };

  // handle change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  // handle blur
  handleBlur = (event) => {
    const {
      name,
      title,
      validity: { valueMissing, patternMismatch },
    } = event.target;

    let mess = ``;
    if (valueMissing) {
      mess = `${title} không được bỏ trống!`;
    }
    if (patternMismatch) {
      mess = `${title} không đúng định dạng!`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: mess,
      },
    });
  };
  // handle submit
  handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    this.props.dispatch({
      type: this.props.selectedUer ? "UPDATE_USER" : "ADD_USER",
      payload: this.state.values,
    });

    this.setState({
      values: {
        maSV: "",
        hoTen: "",
        phoneNumber: "",
        email: "",
      },
    });
  };

  // chuyển props thành state nội bộ
  static getDerivedStateFromProps = (nextProps, currentState) => {
    // console.log({ nextProps });
    // console.log({ currentState });
    // console.log(nextProps.selectedUer);
    if (
      nextProps.selectedUer &&
      nextProps.selectedUer.maSV !== currentState.values.maSV
    ) {
      currentState.values = nextProps.selectedUer;
    }
    return currentState;
  };
  render() {
    // console.log(this.state);
    // const { selectedUer } = this.props;
    const { maSV, hoTen, phoneNumber, email } = this.state.values;
    return (
      <div>
        <h1 className="capitalize text-3xl text-white bg-black p-4 font-bold">
          thông tin sinh viên
        </h1>

        <form
          noValidate
          className="mt-4 grid grid-cols-2 gap-4"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label className="block " htmlFor="maSV">
              Mã SV
            </label>
            <input
              type="text"
              name="maSV"
              id="maSV"
              className="w-full p-2 mt-2 border-2 rounded-sm border-gray-200 outline-none focus:border-blue-500"
              onChange={this.handleChange}
              required
              onBlur={this.handleBlur}
              title="Mã SV"
              value={maSV}
            />
            <span className="font-bold text-red-500 text-[15px]">
              {this.state.errors.maSV}
            </span>
          </div>
          <div className="form-group">
            <label className="block " htmlFor="hoTen">
              Họ tên
            </label>
            <input
              type="text"
              name="hoTen"
              id="hoTen"
              className="w-full p-2 mt-2 border-2 rounded-sm border-gray-200 outline-none focus:border-blue-500"
              onChange={this.handleChange}
              required
              onBlur={this.handleBlur}
              title="Họ tên"
              value={hoTen}
            />
            <span className="font-bold text-red-500 text-[15px]">
              {this.state.errors.hoTen}
            </span>
          </div>
          <div className="form-group">
            <label className="block " htmlFor="phoneNumber">
              Số điện thoại
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="w-full p-2 mt-2 border-2 rounded-sm border-gray-200 outline-none focus:border-blue-500"
              onChange={this.handleChange}
              required
              onBlur={this.handleBlur}
              title="Số điện thoại"
              value={phoneNumber}
            />
            <span className="font-bold text-red-500 text-[15px]">
              {this.state.errors.phoneNumber}
            </span>
          </div>
          <div className="form-group">
            <label className="block " htmlFor="maSV">
              Email
            </label>
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              type="text"
              name="email"
              id="email"
              className="w-full p-2 mt-2 border-2 rounded-sm border-gray-200 outline-none focus:border-blue-500"
              onChange={this.handleChange}
              required
              title="Email"
              onBlur={this.handleBlur}
              value={email}
            />
            <span className="font-bold text-red-500 text-[15px]">
              {this.state.errors.email}
            </span>
          </div>
          <div>
            <button className="p-3 capitalize bg-green-500 hover:bg-green-700 text-white mr-3">
              thêm sinh viên
            </button>
            <button className="p-3 capitalize bg-yellow-500 hover:bg-yellow-700 text-white">
              cập nhật sinh viên
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    ...rootReducers.btForm,
  };
};

export default connect(mapStateToProps)(Form);
