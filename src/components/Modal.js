import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";

import { setModalState, updateTableRow } from "../actions/modal";

const Modal = ({typeOfTable}) => {

	const {activeRow} = useSelector( state => state.modal );
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setModalState());
	};

	const { values: formValuesDesigns, handleInputChange: changeInputDesigns, reset: resetDs } = useForm({
		nameDs: activeRow.name,
		courses: activeRow.courses,
		wales: activeRow?.wales,
	});

	const { values: formValuesSetouts, handleInputChange: changeInputSetouts, reset: resetSt } = useForm({
		nameSt: activeRow.name,
		machine_name: activeRow?.machine_name,
		machine_width: activeRow?.machine_width,
		courses2: activeRow.courses,
	});

	const { nameDs, courses, wales } = formValuesDesigns;
	const { nameSt, machine_name, machine_width, courses2} = formValuesSetouts;

	const handleSubmit = (e) => {
		e.preventDefault();
		if(typeOfTable === "designs") {
			dispatch(updateTableRow("designs", formValuesDesigns, activeRow.id, activeRow.user_id_last_update));
			resetDs();
			dispatch(setModalState());

		} else if (typeOfTable === "setouts") {
			dispatch(updateTableRow("setouts", formValuesSetouts, activeRow.id));
			resetSt();
			dispatch(setModalState());
		}
	};

	return (
		<>
			<form className="form animate__animated animate__fadeIn">
				<div className="modal_card">
					<h2 className="close" onClick={handleCloseModal}><i className="fa-solid fa-xmark"></i>  </h2>
					<h3 className="step-title">Edit your {typeOfTable === "designs" ? "Design" : "Setout"}</h3>

					<div className="form-group">
						<label>Name</label>
						<input type="text" name={typeOfTable === "designs" ? "nameDs" : "nameSt"} onChange={typeOfTable === "designs" ? changeInputDesigns : changeInputSetouts} value={typeOfTable === "designs" ? nameDs : nameSt} autoComplete="off"/>
					</div>
					<div className="form-group">
						<label>{typeOfTable === "designs" ? "Courses" : "Machine Name"}</label>
						<input type="text" name={typeOfTable === "designs" ? "courses" : "machine_name"} onChange={typeOfTable === "designs" ? changeInputDesigns : changeInputSetouts} value={typeOfTable === "designs" ? courses : machine_name} autoComplete="off"/>
					</div>
					<div className="form-group">
						<label>{typeOfTable === "designs" ? "Wales" : "Machine Width"}</label>
						<input type="text" name={typeOfTable === "designs" ? "wales" : "machine_width"} onChange={typeOfTable === "designs" ? changeInputDesigns : changeInputSetouts} value={typeOfTable === "designs" ? wales : machine_width} autoComplete="off"/>
					</div>
					{typeOfTable !== "designs" && (
						<div className="form-group">
							<label>Courses</label>
							<input type="text" name="courses2" onChange={changeInputSetouts} value={courses2} />
						</div>
					)}
					<button className="btn" type="button" onClick={handleSubmit}>Submit</button>
				</div>
			</form>
		</>
	);
};

export default Modal;

