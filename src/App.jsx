import { useState } from "react";
import { format } from "date-fns";
import "./App.scss";

function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [dateFormat, setDateFormat] = useState("");

	const handleStepDown = () => {
		if (step > 1) {
			setStep((s) => s - 1);
		}
	};

	const handleDateFormatChange = (e) => {
		setDateFormat(e.target.value);
	};

	const handleReset = () => {
		setStep(1);
		setCount(0);
		setDateFormat("");
	};

	const date = new Date();
	date.setDate(date.getDate() + count);

	let renderDate = "";
	if (dateFormat) {
		renderDate = format(date, dateFormat);
	} else {
		renderDate = date.toDateString();
	}

	return (
		<>
			<h1>Date Counter</h1>
			<div className="row">
				<div className="row__setter">
					<input
						type="range"
						min="1"
						max="10"
						step="1"
						value={step}
						onChange={(e) => setStep(parseInt(e.target.value))}
					/>
				</div>
				<div className="row__setter">
					<button onClick={handleStepDown}>-</button>
					<span>Step: {step}</span>
					<button onClick={() => setStep((s) => s + 1)}>+</button>
				</div>
				<div>
					<small>Amount of step when changing the counter.</small>
				</div>
			</div>
			<div className="row">
				<div className="row__setter">
					<button onClick={() => setCount((s) => s - step)}>-</button>
					<span>Count: {count}</span>
					<button onClick={() => setCount((s) => s + step)}>+</button>
				</div>
				<div>
					<small>Number of days before/after today.</small>
				</div>
			</div>
			<div className="row">
				<div className="row__setter">
					Date format
					<select
						onChange={handleDateFormatChange}
						value={dateFormat}
					>
						<option value="">Default</option>
						<option value="d. M. yyyy">d. M. yyyy</option>
						<option value="MM/dd/yyyy">MM/dd/yyyy</option>
					</select>
				</div>
			</div>
			<div className="row">
				<div className="row__setter row__setter--c">
					<button
						onClick={handleReset}
						disabled={
							count !== 0 || step > 1 || dateFormat
								? ""
								: "disabled"
						}
					>
						Reset
					</button>
				</div>
			</div>
			<hr />
			<div className="date">
				{count === 0
					? "Today is "
					: count > 0
					? `${count} days from today will be `
					: `${Math.abs(count)} days ago was `}
				<br />
				<strong>
					<time>{renderDate}</time>
				</strong>
			</div>
		</>
	);
}

export default App;
