import { IconContext } from 'react-icons';

export default function ConfigIcon({ children }) {

	    return (
		            <>
		                <IconContext.Provider value={{ color: "black", size: "2rem" }}>
		                    {children}
		                </IconContext.Provider>
		            </>
		        );
}
