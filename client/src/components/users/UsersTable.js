import React from "react";
import { Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";

const UsersTable = props => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Firstname</Table.HeaderCell>
          <Table.HeaderCell>Lastname</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>About</Table.HeaderCell>
          <Table.HeaderCell>Profile</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.users.map(user => {
          return (
            <Table.Row>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.about}</Table.Cell>
              <Table.Cell>
                {parseInt(props.auth.id) === user.id ? (
                  <Button href={`/users/${user.id}`} color="teal">
                    Profile
                  </Button>
                ) : null}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(UsersTable);
