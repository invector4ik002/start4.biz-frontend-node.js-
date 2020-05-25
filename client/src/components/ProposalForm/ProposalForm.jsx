import React, {Fragment} from 'react';
import { Field, reduxForm} from 'redux-form';
import {proposalChangeStep, proposalChangeSuccess, proposalRequest} from '../../store/actions/proposalActions';
import {required} from '../../validators/validator';
import './ProposalForm.css';

const ProposalStep1 = ({stepForward}) => {
	return (
	<Fragment>
		<div className="proposal__step">
			<h2 className="proposal__step-title">Шаг 1 из 3</h2>
		
			<div className="proposal__step-input-group">
				<label htmlFor="contact_name" className="proposal__step-input-label">Имя</label>
				<div className="proposal__step-input-wrapper">
					<Field name='contact_name' className=" proposal__step-input" component='input' type='text' placeholder="Александр" 
					validate={required}/>
				</div>
			</div>

			<div className="proposal__step-input-group">
				<label htmlFor="contact_phone" className="proposal__step-input-label">Телефон</label>
				<div className="proposal__step-input-wrapper">
					<Field name='contact_phone' className="form-control proposal__step-input" component='input' type='text' placeholder="+7-912-999-9999"/>
				</div>
			</div>

			<div className="proposal__step-input-group">
				<label htmlFor="contact_email" className="proposal__step-input-label">Эл. почта</label>
				<div className="proposal__step-input-wrapper">
					<Field name='contact_email' className="form-control proposal__step-input" component='input' type='text' placeholder="alexanderivanov@mail.ru"/>
				</div>
			</div>

		</div>
		<div className="proposal__paginator">
			<button className="proposal__previous-step-link proposal__step-link--invisible proposal__button">Шаг назад</button>
			<button className="proposal__next-step-link proposal__button" onClick={stepForward}>Шаг 2</button>
		</div>
	</Fragment>
	)
}

const ProposalStep2 = ({whatToBuy, transportPurpose, stepBack, stepForward}) => {
	return (
	<Fragment>
		<div className="proposal__step">
			<h2 className="proposal__step-title">Шаг 2 из 3</h2>

			<div className="proposal__step-input-group">
				<label htmlFor="inn" className="proposal__step-input-label" >Инн организации</label>
				<div className="proposal__step-input-wrapper">
					<Field name='inn' className="form-control proposal__step-input" component='input' type='text' placeholder="**********"/>
				</div>
			</div>

			<div className="proposal__step-input-group">
				<label htmlFor="request_subject" className="proposal__step-input-label">Что необходимо приобрести</label>
				<Field name='request_subject' className="form-control proposal__step-input" component='select' type='text'>
				{whatToBuy.map((value, key) => {
				return <option key={key} value={value}>{value}</option>
				})}
				</Field>
			</div>

			<div className="proposal__step-input-group">
				<label htmlFor="subject_purpose" className="proposal__step-input-label">Назначение транспорта</label>
				<Field name='subject_purpose' className="form-control proposal__step-input" component='select' type='text' placeholder="">
				{transportPurpose.map((value, key) => {
				return <option key={key} value={value}>{value}</option>
				})}
				</Field>
			</div>
		</div>
		<div className="proposal__paginator">
				<button className="proposal__previous-step-link proposal__button" onClick={stepBack}>Назад</button>
				<button className="proposal__next-step-link proposal__button" onClick={stepForward}>Шаг 3</button>
		</div>
	</Fragment>
	)
}

const ProposalStep3 = ({summAvPayment, leasingPeriod, stepBack}) => {
	return (
	<Fragment>
		<div className="proposal__step">
		<h2 className="proposal__step-title">Шаг 3 из 3</h2>

		<div className="proposal__step-input-group">
			<label htmlFor="subject_description" className="proposal__step-input-label">Опишите предмет лизинга</label>
			<div className="proposal__step-input-wrapper">
				<Field name="subject_description" className="form-control proposal__step-input" component='input' type='text' placeholder="Предмет лизинга"/>
			</div>
		</div>

		<div className="proposal__step-input-group">
			<label htmlFor="advance_payment" className="proposal__step-input-label">Сумма авансового платеже (%)</label>
			<Field name="advance_payment" className="form-control proposal__step-input" component='select' type='text'>
			{summAvPayment.map((value, key) => {
				return <option key={key} value={value}>{value}</option>
			})}
			</Field>
		</div>
		
		<div className="proposal__step-input-group">
			<label htmlFor="credit_period" className="proposal__step-input-label" >Срок лизинга (мес.)</label>
			<Field name="credit_period" className="form-control proposal__step-input" component={'select'} type='text'>
				{leasingPeriod.map((value, key) => {
				return <option key={key} value={value}>{value}</option>
				})}
			</Field>
		</div>

		</div>
		<div className="proposal__paginator">
			<button className="proposal__button proposal__previous-step-link" onClick={stepBack}>Назад</button>
			<button type="submit" className="proposal__button proposal__next-step-link">Подать заявку</button>
		</div>
	</Fragment>
	)
}

const SuccessStep = (props) => {
	return(
		<Fragment>
		<div className="proposal-success">
            <div className="proposal-success__title">
                <p>Спасибо за обращение!</p>
            </div>
            <div className="proposal-success__content">
                <p>
                    В ближайшее время мы подберем для Вас лучшие предложения лизинга
                </p>
            </div>
        </div>
		</Fragment>
	)
}

const ProposalFormNR = (props) => {
	let step = props.step;

	const stepForward = () => {
		if (step === 3)
			return;

		props.dispatch(proposalChangeStep(++step));
	}

	const stepBack = () => {
		if (step === 1)
			return;

		props.dispatch(proposalChangeStep(--step));
	}

	let showData;

	if (props.success) {
		showData = <SuccessStep />
	} else {
		if (step === 1) { 
			showData = <ProposalStep1 stepForward={stepForward}/>
		} else if (step === 2) {
			showData = <ProposalStep2 whatToBuy={props.whatToBuy} transportPurpose={props.transportPurpose} stepBack={stepBack} stepForward={stepForward}/>
		} else if (step === 3) {
			showData = <ProposalStep3 summAvPayment={props.summAvPayment} leasingPeriod={props.leasingPeriod} stepBack={stepBack}/>
		}
	}

	return (
		<Fragment>
			<form className="proposal" onSubmit={props.handleSubmit}>
			{showData}
			</form>
		</Fragment>
	);
}

const onSubmit = (values, dispatch) => {
	console.log("form data", values);
	//dispatch(proposalChangeSuccess(true));
	dispatch(proposalRequest(values));
};

//оборачиваю форму в reduxForm
const ProposalForm = reduxForm ({
	form: 'proposal',
	onSubmit,
}) (ProposalFormNR)

export default ProposalForm;