import { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <div className='flex items-center max-w-md mx-auto shadow rounded border-0 p-3'>
                <input
                    className={'block w-64 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${this.props.className}'}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
                <i className='fas fa-search flex-grow-0 py-2 px-2' />
            </div>
        )
    }
}

export default SearchBox;