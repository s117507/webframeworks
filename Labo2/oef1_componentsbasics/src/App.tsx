interface HeaderProps {
  title: string;
  subtitle: string;

}

interface FooterProps {
  year: number;
  copy: string;

}

interface ItemProps {
  items : string[];
}

interface ListItemProps {
  text: string,
}

const Header = ({title, subtitle} : HeaderProps ) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle} </h2>  
    </>
  )
}

const ListItem = ({text}: ListItemProps) => {
  return (
    <li>{text} </li>
  )
}

const List = ({ items }: ItemProps) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item} text={item} />
      ))}
    </ul>
  )
}

const Main = () => {
  return {

  }
}

const Footer = ({copy, year} : FooterProps) => {
  return (
    <>
      <p>
        {copy} Trong Vo Van {year}
      </p>
    </>
  )
}

const App = () => {
  let items : string[] = [
    "item 1", "item 2", "item 3"
  ]

  return (
    <div>
      <Header title="Labo 2" subtitle="Components Basics"/>
      <List items={items}/>  
      <Footer copy="@" year={2026}/>
    </div>
  )
}

export default App
