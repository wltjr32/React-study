import { useState } from "react";

const event2 = () => {
    //state 초기와
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const [message,username] = form;
    const onChange = e => {
        
    }
}