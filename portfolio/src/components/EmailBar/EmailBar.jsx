import './EmailBar.css';

const EmailBar = () => {
    return (
        <div id='EmailBar'>
            <a
                href='mailto:Ulvesten@icloud.com?subject=Get in Touch!'
                id='EmailBar--Text--A'
            >
                <p id='EmailBar--Text'> - - - Ulvesten@Icloud.com - - -</p>
            </a>
        </div>
    );
};

export default EmailBar;
