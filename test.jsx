'use client';
import { CustomCard } from '@/app/components/Global/Card';
import FindingsRecommendationTable from '@/app/components/implementation/tables/FindingsRecommendationTable';
import FindingsSummaryTable from '@/app/components/implementation/tables/FindingsSummaryTable';
import SummaryMap from '@/app/components/realization/SummaryMap';
import TaskMap from '@/app/components/realization/TaskMap';
import RoleGuard from '@/middleware/HOC/withRoleGuard';
import { useAuthContext } from '@/middleware/Store/useAuthContext';
import React from 'react';

const SupervisionSummaryPage = () => {
  const { user } = useAuthContext();
  const permittedRoles = ['Developer', 'PEP', 'JFA'];

  return (
    <RoleGuard
      allowedRoles={['Admin', 'Leader', 'Executor', 'Auditor', 'Developer', 'PEP', 'JFA']}
    >
      <div className="space-y-3 w-full">
        <h3 className="text-xl">Summary Results</h3>
        {permittedRoles.includes(user?.role) && (
          <SummaryMap title="Create Summary Results" task="findingsSummary" />
        )}
        
        <div className="grid w-full gap-3">
          {/* <CardCompo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nents> */}
          <FindingsSummaryTable />
          {/* </CardCompo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nents> */}

          <FindingsRecommendationTable />
        </div>
      </div>
    </RoleGuard>
  );
};

export default SupervisionSummaryPage;