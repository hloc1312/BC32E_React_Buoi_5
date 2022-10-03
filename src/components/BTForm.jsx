import React, { Component } from "react";
import DanhSach from "./DanhSach";
import Form from "./Form";

export default class BTForm extends Component {
  render() {
    return (
      <div className="max-w-7xl mx-auto">
        <Form />
        <DanhSach />
      </div>
    );
  }
}
