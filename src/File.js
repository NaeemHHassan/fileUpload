import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import '../../index.css';
import ReactDOM from "react-dom";

import React, { Component } from "react";
import { Growl } from "primereact/growl";
import { FileUpload } from "primereact/fileupload";

export class File extends Component {
  constructor() {
    super();

    this.onUpload = this.onUpload.bind(this);
  }

  onUpload(event) {
    this.growl.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
    console.log(event.xhr.response);

    //this variable holds the result from the backend ... this is response on uploading the file=> event.xhr.response
  }

  render() {
    return (
      <div>
        <h3>Advanced</h3>
        <FileUpload
          name="demo[]"
          url={"localhost:3900/fileUpload"}
          //   this url should be of post method and must be defined by multer to accept the file and then the json resulte
          onUpload={this.onUpload}
          multiple={true}
          accept="image/*"
          maxFileSize={1000000}
        />

        <Growl
          ref={(el) => {
            this.growl = el;
          }}
        ></Growl>
      </div>
    );
  }
}
