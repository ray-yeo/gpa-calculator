import Button from './Button'

const Header = () => {

    const onClick = () => {
        console.log('click')
    }

    return(
        <header>
            <h1>GPA Calculator</h1>
            <!-- <Button color='light blue' text='Upload Transcript' onClick={onClick}/> -->
        </header>
    )
}

export default Header