import React from 'react'
import { reduxForm, InjectedFormProps, Field } from 'redux-form'
import { connect } from 'react-redux';
import { makeStyles, Typography, TextField, Button, Container, CssBaseline, Grid, Link} from '@material-ui/core'

interface IProps{
    email : string;
    password : string;
}


const renderTextField = 
({  input, 
    label,
    meta: { touched, error, invalid }, 
    ...custom 
}) => (
    <TextField
        autoComplete = {label}
        fullWidth
        label = {label}
        margin = 'normal'
        name={label}
        error={touched && invalid}
        helperText={touched && error}
        required
        type = {label}
        variant = 'standard'
        {...input}
        {...custom}
    />
)

const useStyles = makeStyles((theme) => ({

    page: {
        marginTop: theme.spacing(8),
        display : 'flex',
        flexDirection: 'column',
        alignItems : 'center',
    },
    submit : {
        margin: theme.spacing(3, 0, 2),
    },
}))

export const Authorization : React.FC<IProps & InjectedFormProps<{}, IProps>> = (props : any) => {

    const classes = useStyles()
    const {handleSubmit} = props
    return (
        
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className = {classes.page}>
                <Typography variant = 'h5' component = "h1">
                    Авторизация
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Field name="email" component={renderTextField} label="email" />
                    <Field name="password" component={renderTextField} label="password" />
                    <Button
                        type="submit"
                        fullWidth
                        variant = "contained"
                        color = "primary"
                        className = {classes.submit}>
                         Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Вы еще не зарегистрированы?<br/>Регистрация
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

const form = reduxForm<{}, IProps>({
    form: 'auth'
})(Authorization);
    
export default form