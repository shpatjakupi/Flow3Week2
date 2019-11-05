import React, {useState} from "react";
 
function MemberTable({ members }) {
    const tableItems = members.map(member => (
        <Row key={member.id} name={member.name} />
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>{tableItems}</tbody>
        </table>
    );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}
function Row(props) {
    return (
        <tr>
            <td>{props.name}</td>
        </tr>
    );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
