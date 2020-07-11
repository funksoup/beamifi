import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const DataList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="completed" />
        </Datagrid>
    </List>
);
export default DataList;