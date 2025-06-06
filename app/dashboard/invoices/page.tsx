import { Metadata } from 'next';
 

//Exporting Custom metadata for Invoice
export const metadata: Metadata = {
  title: 'Invoices',
}

export default function Page() {
  return <p>Invoices Page</p>;
}