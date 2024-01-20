import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { fetchFilteredCustomers } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Customers',
};
 
interface CustomersPageProps {
  customersData: FormattedCustomersTable[]; // Assuming this is the type of your customer data
}


export default async function Page({
customersData,
searchParams, 
}: CustomersPageProps & { 
    searchParams?: {
    query?: string;
};
}) {
  const query = searchParams?.query || '';
  const customers = customersData || (await fetchFilteredCustomers(query));

  return (
    <main>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}></h1>
        </div>
          <CustomersTable customers={customers} />
      </div>
    </main>
  );
}