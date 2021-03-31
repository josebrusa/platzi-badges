import React from 'react';
import MyLoader from './MyLoader';
import './styles/PageLoading.css';

function PageLoading () {
    return (
        <div className="PageLoading">
            <MyLoader />
        </div>
    )
}

export default PageLoading;