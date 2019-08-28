import React, {Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchRemoteData} from '../../actions/fetch-data-actions'

const propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
}

class Index extends Component {
    componentDidMount() {
        let url = 'https://api.github.com/search/repositories?q=cats+stars%3A%3E1000+license%3Amit+fork%3Atrue&type=Repositories'
        this.props.fetchData(url)
        
        return
    }
    componentWillUnmount() {
        return 
    }
    render() {
        return(
            <section>
                This is the home page View
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchRemoteData(url))
    }
}
Index.propTypes = propTypes
export default connect(mapStateToProps, mapDispatchToProps)(Index)