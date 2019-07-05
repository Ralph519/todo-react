import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';

const TodosFiltered = props => {
    return (
        <div>
            <button 
                onClick={() => props.updateFilter('all')}
                className={classnames({'active': props.filter==='all'})}
            >
            All
            </button>

            <button 
                onClick={() => props.updateFilter('active')}
                className={classnames({'active': props.filter==='active'})}
            >
            Active
            </button>
            
            <button 
                className={classnames({'active': props.filter==='completed'})}
                onClick={() => props.updateFilter('completed')}
            >
            Completed
            </button>

        </div>
    );
};

TodosFiltered.propTypes = {
    updateFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default TodosFiltered;