import React from "react";
import { Input, List, Divider, Button, Row, Col } from "antd";
import CopyButton from "./CopyButton";

interface SearchieldProps {}

const SearchField: React.FunctionComponent<SearchieldProps> = ({}) => {
  const data = [
    {
      id: 1,
      fieldName: "First Name",
      fieldDescription: "Cutomer's fist name",
      fieldCode: "__first_name__",
    },
    {
      id: 2,
      fieldName: "Last name",
      fieldDescription: "Cutomer's last name",
      fieldCode: "__last_name__",
    },
    {
      id: 3,
      fieldName: "Vinlocity ID",
      fieldDescription: "Vinlocity ID",
      fieldCode: "__vin_id__",
    },
    {
      id: 4,
      fieldName: "Order Status",
      fieldDescription: "Order Status. e.g. Delivered, Confirmed, Received",
      fieldCode: "__status__",
    },
    {
      id: 5,
      fieldName: "Origin Address Line 1",
      fieldDescription: "Origin Address Line 1",
      fieldCode: "__o_line_1__",
    },
    {
      id: 6,
      fieldName: "Destination Address Line 1",
      fieldDescription: "Destination Address Line 1",
      fieldCode: "__d_line_1__",
    },
  ];
  const { Search } = Input;

  const onSearch = (value: any) => console.log(value);
  return (
    <div>
      <Search placeholder="Find Fields" onSearch={onSearch} enterButton />

      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[<CopyButton fieldCode={item.fieldCode} />]}
          >
            <List.Item.Meta
              description={item.fieldDescription}
              title={item.fieldName}
              children={<div>{item.fieldCode}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchField;
