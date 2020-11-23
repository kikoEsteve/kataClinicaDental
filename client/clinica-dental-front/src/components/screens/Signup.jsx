import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //Importamos Link para poder usarlo en la redirección entre signin, signup y reset
import { UserContext } from "../../App";
import M from "materialize-css";

const Signup = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const PostData = () => {
        if ( //hacemos uso del REGEX para comprobar que el email es correcto 
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                email
            )
        ) {
            M.toast({ html: "invalid email", classes: "#c62828 red lighten-1" });
            return;
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red lighten-1" });
                } else {
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    dispatch({ type: "USER", payload: data.user });
                    M.toast({
                        html: "successfully signed",
                        classes: "#43a047 green darken-1",
                    });
                    history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        //Importamos cards.html de materialize substituyendo class por className
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>ClinicaDental</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Importamos buttons.html de materializecss. Elegimos color tambien en materializecss */}
                <button
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => PostData()}
                >
                    Signup
        </button>
                {/* Añadimos el h5 para redireccionar a /signup en caso de que no sea aún usuario */}
                <h5>
                    <Link to="/signup">Don't you have an account ?</Link>
                </h5>
                {/* Añadimos el h5 para redireccionar a /reset en caso de que haya olvidado la contraseña */}
                <h6>
                    <Link to="/reset">Forgot the password ?</Link>
                </h6>
            </div>
        </div>
    );
};