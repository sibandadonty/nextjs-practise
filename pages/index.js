// import fs from "fs"
// import path from "path";

import { redirect } from "next/dist/server/api-utils";

function HomePage(props) {
    const { products } = props;
    return (
      <ul>
        {products.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    );
  }
  
export async function getStaticProps() { 
    
    return {
        props: {
           products: [{id: "p1", title: "okay"}]
        },
        redirect: "/events/1"
    }
}

export default HomePage;