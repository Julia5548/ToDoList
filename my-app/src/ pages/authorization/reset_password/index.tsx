import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { onResetPasswordAction } from '../../../store/actions';
import Form from './components/formResetPassword';

interface IProps{
    onResetPassword(email: string, history) : void;
}

const useStyles = makeStyles((theme) => ({
    page: {
        marginTop: theme.spacing(8),
        display : 'flex',
        flexDirection: 'column',
        alignItems : 'center',
    }
}));

const mapDispatchToProps = (dispatch) => (
    { 
        onResetPassword :(email: string, history) => {
            dispatch(onResetPasswordAction(email, history))
        }
    }
)

export const ResetPassword : React.FC<IProps> = (props : IProps) => {
    
    const classes = useStyles();

    return(
        <div className = {classes.page}>
            <Typography variant = 'h5' component = "h1">
                Сброс пароля
            </Typography>
            <Form onResetPassword = {props.onResetPassword}/>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(ResetPassword);