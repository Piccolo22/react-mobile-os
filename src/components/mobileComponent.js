import categoryComponent from './categoryComponent';

function mobileComponent({title, company}){
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {company.map((cat) => categoryComponent(cat))}
      </ul>
    </div>
  );
}

export default mobileComponent;