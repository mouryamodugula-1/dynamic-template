import React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TemplateProps {}

/* This is Tinymce editor which will be used to create a template according to the given fields */

const Template: React.FC<TemplateProps> = () => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content, editor);

    //  onTemplateChange(content);
  };

  return (
    <div>
      <Editor
        // initialValue={template}
        init={{
          height: 500,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          menubar: "file edit view insert format tools table tc help",

          toolbar:
            "undo redo | formatselect  | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default Template;
