import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

const Ducks = () => {
  return (
    <>
      <h1>Ducks</h1>
      <img src="https://m.media-amazon.com/images/I/41o3kFr94KL._AC_.jpg" alt="Cute duck" />
      <form>
        <label htmlFor=""></label>
        <input type="button" value="cute"/>
        <input type="button" value="not cute" />
      </form>
    </>
  )
}

export default Ducks;