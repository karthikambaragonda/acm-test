import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import Fade from '@mui/material/Fade';
function About() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='about'> 
            <div className='aboutcont'>
                <Fade in={show} timeout={2000}>
                <p className='mt-2 lh-lg text-lg text-gray-300'>
                        <q>ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the worlds largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence.</q>
                    </p>
                </Fade>
            </div>
        </div>
    )
}
export default About;