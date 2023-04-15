// Created Monday, March 13, 2023 5:19 PM by SliceImpl, all rights reserved. 
import React from 'react';
// import { AuthContext } from  "../../App";
// import * as Permission from '../../utils/Permissions';
// import Icon from '@mdi/react';
// import { mdiDetails } from '@mdi/js';
//  import { mdiSquareEditOutline  } from '@mdi/js';
// import { useDispatch } from 'react-redux'
// import { viewItem, editItem } from '../../slices/roles'

const ResultItem = props => {
	//const dispatch = useDispatch();
	// const { state: authState } = React.useContext(AuthContext);

	// let isViewable = (
	// 	<button
	// 		type="button"
	// 		className="btn btn-lnk"
	// 		onClick={() => dispatch(viewItem(props.item.roleId))}
	// 		style={{background: "transparent"}}
	// 		title="Details">
	// 		<Icon path={mdiDetails} size={.6} color={props.colorScheme} />
	// 	</button>
	// );

	return (
		<React.Fragment>
			<tr style={{ fontSize: "80%" }} className={props.className}>
				<td>
				</td>
				<td>{props.item.roleName}</td>
			</tr>
		</React.Fragment>
	)
};
export default ResultItem;