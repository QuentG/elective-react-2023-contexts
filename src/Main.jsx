import React, { Fragment, useContext } from 'react'
import LoginForm from './components/LoginForm'
import UserSettingsForm from './components/UserSettingsForm'
import { AuthContext } from './provider/AuthProvider'

const Main = () => {
    const { state } = useContext(AuthContext)

    return (
        <Fragment>
            {state.isLoading ? (
                <div>Loading...</div>
            ) : state.isLogged ? (
                <UserSettingsForm />
            ) : (
                <LoginForm />
            )}
        </Fragment>
    )
}

export default Main
