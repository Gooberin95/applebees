import { IconContext } from 'react-icons';

export default function ConfigIconNext({ children }) {

	    return (
		            <>
		                <IconContext.Provider value={{ color: "black", size: "3rem" }}>
		                    {children}
		                </IconContext.Provider>
		            </>
		        );
}
