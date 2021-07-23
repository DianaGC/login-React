import React, {useEffect, useState} from "react"
import {Button, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getToken} from "../../store/ActionCreator";
import TextField from "@material-ui/core/TextField";

const Login =()=>{
    const dispatch = useDispatch();
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit =() =>{
        dispatch(getToken({
            app: "APP_BCK",
            user,
            pass,
        }))
    }

    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                    value={user}
                    onChange={setUser(user)}
                    variant={"outlined"}
                    fullWidth
                    label={"user"}
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={pass}
                        onChange={setPass(pass)}
                        variant={"outlined"}
                        fullWidth
                        label={"Password"}
                    />
                </Grid>
                <Button onClick={handleSubmit}>Login</Button>

            </Grid>
        </>
    )

}
export default Login
