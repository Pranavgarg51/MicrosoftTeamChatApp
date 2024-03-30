import {useState} from 'react';
import axios from 'axios';

const LoginForm = ()=>{
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError] = useState("");

const handleSubmit= async (e)=>{
e.preventDefault();
const authObject={'Project-ID':'5f8f68ad-f2b9-414a-9a91-a68c6aa79896', 'User-Name': username, 'User-Secret':password}

try{
   await axios.get('https://api.chatengine.io/chats',{headers: authObject});
    localStorage.setItem('username', username);
    localStorage.setItem('password',password);

    window.location.reload();
    setError("");

}catch (error){
   setError('Oops , incorrect credentials');
}}

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}
                    className="input" placeholder="UserName" required/>
                     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}
export default LoginForm;