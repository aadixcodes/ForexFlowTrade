



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
// import StatusBadge from '../../../components/ui/StatusBadge';
// import { Skeleton } from '@/components/ui/skeleton';

// const TradesOrderHistory = () => {
//   const [loading, setLoading] = useState(true);
//   const [summaryData, setSummaryData] = useState([]);
//   const [tradingHistory, setTradingHistory] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('All');

//   // Filter options
//   const filters = ['All', 'Open', 'Closed'];

//   useEffect(() => {
//     // Simulate data loading
//     const timer = setTimeout(() => {
//       setSummaryData([
//         { title: 'Total Trades', value: '24', change: '+5 from last week' },
//         { title: 'Total Investment', value: '$12,450', change: '+$1,200 from last week' },
//         { title: 'Net Profit/Loss', value: '+$1,845', change: '+$320 from last week' }
//       ]);
      
//       setTradingHistory([
//           { 
//             id: 1, 
//             date: '2023-04-11', 
//             symbol: 'AAPL', 
//             quantity: 10, 
//             buyPrice: 185.92, 
//             sellPrice: 190.5, 
//             type: 'long', 
//             profitLoss: '-$45.80', 
//             status: 'closed' 
//           },
//           { 
//             id: 2, 
//             date: '2023-04-10', 
//             symbol: 'MSFT', 
//             quantity: 5, 
//             buyPrice: 412.65, 
//             sellPrice: null, 
//             type: 'long', 
//             profitLoss: '-$2.35', 
//             status: 'open' 
//           },
//           { 
//             id: 3, 
//             date: '2023-04-09', 
//             symbol: 'GOOGL', 
//             quantity: 3, 
//             buyPrice: 178.05, 
//             sellPrice: 182.3, 
//             type: 'short', 
//             profitLoss: '+$12.75', 
//             status: 'closed' 
//           },
//           { 
//             id: 4, 
//             date: '2023-04-08', 
//             symbol: 'TSLA', 
//             quantity: 8, 
//             buyPrice: 172.82, 
//             sellPrice: null, 
//             type: 'long', 
//             profitLoss: '-$21.44', 
//             status: 'open' 
//           },
//           { 
//             id: 5, 
//             date: '2023-04-07', 
//             symbol: 'AMZN', 
//             quantity: 2, 
//             buyPrice: 185.36, 
//             sellPrice: 190.12, 
//             type: 'short', 
//             profitLoss: '+$9.52', 
//             status: 'closed' 
//           },
//       ]);
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="space-y-6 p-4">
//       <h1 className="text-xl sm:text-2xl font-bold dark:text-[#F2F2F2]">Order History</h1>
      
//       {/* Summary Cards - Skeleton Loading */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//         {loading ? (
//           Array.from({ length: 3 }).map((_, index) => (
//             <div key={index} className="rounded-lg border dark:border-[#2A3F3A] p-3 sm:p-4 bg-card shadow-sm">
//               <Skeleton className="h-4 w-3/4 mb-2" />
//               <Skeleton className="h-6 w-full mt-1" />
//               <Skeleton className="h-3 w-full mt-2" />
//             </div>
//           ))
//         ) : (
//           summaryData.map((item, index) => (
//             <div key={index} className="rounded-lg border dark:border-[#2A3F3A] p-3 sm:p-4 bg-card shadow-sm">
//               <h3 className="text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6]">{item.title}</h3>
//               <p className="text-lg sm:text-xl md:text-2xl font-bold mt-1 dark:text-[#F2F2F2]">{item.value}</p>
//               <p className="text-xs text-muted-foreground mt-1">{item.change}</p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Filter Tabs - Always visible */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {filters.map(filter => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap ${
//               activeFilter === filter
//                 ? 'bg-[#2A3F3A] text-white dark:bg-primary dark:text-black'
//                 : 'bg-muted text-muted-foreground hover:bg-muted/80 dark:hover:bg-[#2A3F3A]/50'
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* History Table - Static headers with skeleton loading for data */}
//       <div className="rounded-lg border dark:bg-[#142924] dark:border-[#2A3F3A] shadow-sm overflow-hidden">
//         <div className="p-4 sm:p-6 border-b dark:border-[#2A3F3A]">
//           <h2 className="text-lg sm:text-xl font-semibold dark:text-[#F2F2F2]">Trade History</h2>
//           <p className="text-xs sm:text-sm text-muted-foreground mt-1">
//             Showing {activeFilter === 'All' ? 'all' : activeFilter.toLowerCase()} trades
//           </p>
//         </div>
//         <div className="p-2 sm:p-4 overflow-x-auto">
//           <table className="w-full min-w-[700px]">
//             <thead>
//               <tr className="border-b dark:border-[#2A3F3A]">
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Date</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Symbol</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Qty</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Buy Price</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Sell Price</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Type</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">P&L</th>
//                 <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6] whitespace-nowrap">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 Array.from({ length: 5 }).map((_, index) => (
//                   <tr key={index} className="border-b dark:border-[#2A3F3A]">
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-20" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-12" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-8" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-16" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-16" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-12" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-4 w-16" /></td>
//                     <td className="px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap"><Skeleton className="h-6 w-16" /></td>
//                   </tr>
//                 ))
//               ) : (
//                 tradingHistory
//                   .filter(trade => {
//                     if (activeFilter === 'All') return true;
//                     if (activeFilter === 'Pending') return trade.status === 'pending';
//                     if (activeFilter === 'Open') return trade.status === 'open';
//                     if (activeFilter === 'Pending Sell') return trade.status === 'pending_sell';
//                     if (activeFilter === 'Closed') return trade.status === 'closed';
//                     return true;
//                   })
//                   .map((trade) => (
//                     <tr key={trade.id} className="border-b dark:border-[#2A3F3A] hover:bg-muted/50">
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm dark:text-[#F2F2F2] whitespace-nowrap">{trade.date}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium dark:text-[#F2F2F2] whitespace-nowrap">{trade.symbol}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm dark:text-[#F2F2F2] whitespace-nowrap">{trade.quantity}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm dark:text-[#F2F2F2] whitespace-nowrap">${trade.buyPrice?.toFixed(2)}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm dark:text-[#F2F2F2] whitespace-nowrap">{trade.sellPrice ? `$${trade.sellPrice?.toFixed(2)}` : '-'}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm dark:text-[#F2F2F2] whitespace-nowrap capitalize">{trade.type}</td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-[#4ADE6F] font-medium whitespace-nowrap">
//                         <span className={trade.profitLoss.startsWith('+') ? 'text-success' : 'text-destructive'}>
//                           {trade.profitLoss}
//                         </span>
//                       </td>
//                       <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm whitespace-nowrap">
//                         <StatusBadge status={trade.status} className="text-xs sm:text-sm" />
//                       </td>
//                     </tr>
//                   ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradesOrderHistory;

'use client';

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import StatusBadge from '../../../components/ui/StatusBadge';
import { Skeleton } from '@/components/ui/skeleton';
import api from '../../../utils/axios'; // Import your axios instance

const TradesOrderHistory = () => {
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState([]);
  const [tradingHistory, setTradingHistory] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [error, setError] = useState(null);
  const [hasData, setHasData] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  // Filter options - matching your backend enum values
  const filters = ['All', 'Pending', 'Open', 'Closed', 'Pending_Sell'];

  // Function to fetch order history from backend using your axios instance
  const fetchOrderHistory = async (statusFilter = 'All') => {
    try {
      setLoading(true);
      setError(null);
      
      // Build query parameters
      const params = {};
      if (statusFilter !== 'All') {
        params.status = statusFilter;
      }

      // Use your axios instance instead of fetch
      const response = await api.get('/user/order-history', { params });
      
      // Set metadata
      setHasData(response.data.data.hasData || false);
      setTotalCount(response.data.data.totalCount || 0);
      setSummaryData(response.data.data.summary || []);
      
      // Handle empty trades array
      if (!response.data.data.trades || response.data.data.trades.length === 0) {
        setTradingHistory([]);
        return;
      }
      
      // Transform backend data to match frontend expectations
      const transformedTrades = response.data.data.trades.map(trade => ({
        id: trade._id,
        date: new Date(trade.tradeDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        symbol: trade.symbol || 'UNKNOWN',
        quantity: trade.quantity || 0,
        buyPrice: trade.buyPrice,
        sellPrice: trade.sellPrice,
        type: trade.type ? trade.type.toLowerCase() : 'unknown',
        profitLoss: trade.profitLoss !== null && trade.profitLoss !== undefined ? 
          (trade.profitLoss >= 0 ? `+$${Math.abs(trade.profitLoss).toFixed(2)}` : `-$${Math.abs(trade.profitLoss).toFixed(2)}`) 
          : '$0.00',
        status: trade.status ? trade.status.toLowerCase() : 'unknown',
        tradeAmount: trade.tradeAmount || 0
      }));

      setTradingHistory(transformedTrades);
      
    } catch (err) {
      console.error('Error fetching order history:', err);
      
      // Better error handling based on axios error structure
      let errorMessage = 'Failed to fetch order history';
      
      if (isRateLimit(err)) {
        errorMessage = formatError(err, 'fetching order history');
      } else if (err.response) {
        // Server responded with error status
        errorMessage = err.response.data?.message || `Server error: ${err.response.status}`;
      } else if (err.request) {
        // Network error
        errorMessage = 'Network error. Please check your connection.';
      } else {
        // Other error
        errorMessage = err.message || 'An unexpected error occurred';
      }
      
      setError(errorMessage);
      setTradingHistory([]);
      setHasData(false);
      setTotalCount(0);
      setSummaryData([
        { title: 'Total Trades', value: '0', change: 'Failed to load' },
        { title: 'Total Investment', value: '$0.00', change: 'Failed to load' },
        { title: 'Net Profit/Loss', value: '$0.00', change: 'Failed to load' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount and filter change
  useEffect(() => {
    fetchOrderHistory(activeFilter);
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handle retry
  const handleRetry = () => {
    fetchOrderHistory(activeFilter);
  };

  // Error state
  if (error && !loading) {
    return (
      <div className="space-y-6 p-4">
        <h1 className="text-xl sm:text-2xl font-bold dark:text-[#F2F2F2]">Order History</h1>
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-12 h-12 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Failed to Load Data</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">{error}</p>
          <button 
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold dark:text-[#F2F2F2]">Order History</h1>
        {!loading && totalCount > 0 && (
          <p className="text-sm text-muted-foreground">
            {totalCount} {totalCount === 1 ? 'trade' : 'trades'} total
          </p>
        )}
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-lg border dark:border-[#2A3F3A] p-3 sm:p-4 bg-card shadow-sm">
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-6 w-full mt-1" />
              <Skeleton className="h-3 w-full mt-2" />
            </div>
          ))
        ) : (
          summaryData.map((item, index) => (
            <div key={index} className="rounded-lg border dark:border-[#2A3F3A] p-3 sm:p-4 bg-card shadow-sm">
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground dark:text-[#ABBAB6]">{item.title}</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold mt-1 dark:text-[#F2F2F2]">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.change}</p>
            </div>
          ))
        )}
      </div>

      {/* (Trade history and empty-state UI intentionally removed) */}
    </div>
  );
};

export default TradesOrderHistory;