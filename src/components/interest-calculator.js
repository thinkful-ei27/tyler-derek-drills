import React from 'react';
import {connect} from 'react-redux';
import { setPrincipal, setInterest, setYears } from '../actions';


// Connect this component
function InterestCalculator(props) {
    return (
        <form className="interest-calculator"
            onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="principal">Principal ($)</label>
                <input type="number" id="principal" 
                    value={props.principal}
                    onChange={(e) => props.dispatch(setPrincipal(e.target.value))}
                    min="0" />
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest rate (%)</label>
                <input type="number" id="interest" 
                    value={props.interest}
                    onChange={(e) => props.dispatch(setInterest(e.target.value))}
                    min="0" max="100" step="0.1" />
            </div>
            <div className="form-group">
                <label htmlFor="years">Years</label>
                <input type="number" id="years" 
                    value={props.years}
                    onChange={(e) => props.dispatch(setYears(e.target.value))}
                    min="0" max="100" />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <output type="number" id="total">${props.total.toFixed(2)}</output>
            </div>
        </form>
    );
}
function mapStateToProps(state){
    return {
        principal: state.principal,
        interest: state.interest,
        years: state.years,
        total: state.principal * Math.pow(1 + state.interest / 100, state.years)
    }   

}
export default connect(mapStateToProps)(InterestCalculator)


