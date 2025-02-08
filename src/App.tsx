import { createRoot } from 'react-dom/client';
import { TableAccountProvider } from './contexts/provider/TableAccountContext';
import MainLayout from './layouts/MainLayout';

const root = createRoot(document.body);
root.render(
    <TableAccountProvider>
        <MainLayout/>
    </TableAccountProvider>
);