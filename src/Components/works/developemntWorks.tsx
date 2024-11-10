  /* eslint-disable react/no-unescaped-entities */
  /* eslint-disable max-len */
  import React from 'react';
  import '../../style/visionStyle.scss';
  import { useTranslation } from 'react-i18next';

  function DevelopmentWorks() {
    const { t } = useTranslation();
    return (
      
      <div className="developmentpage">
        <div className="proj">
          <div className="proj-titel-container"><h3 className="proj-title">{t('softwareDevelopmentServices')}</h3></div>
        </div>
        <h2 className="developmentpage-h2">
        {t('web')}
          <span className="highlight"> {t('applicant')} </span>
        </h2>
        <div>
          <h3 className="developmentpage-h2">
          {t('reportGeneration')} 
            <span className="highlight"> {t('reportGeneration')}  </span>
            {t('toolCOCA4000')}
          </h3>
          <ul className="proj-content">
            <li>
            {t('cyberSecurityTool')}
            </li>
            <li>
            {t('systemDescription')}
            </li>
          </ul>

          <div className="heading-sm">{t('features')}</div>
          <div className="features">
          <span>{t('userManagement')}</span>
      <span>{t('organizationAndProjectManagement')}</span>
      <span>{t('reportingAndMetrics')}</span>
      <span>{t('vulnerabilityReporting')}</span>
      <span>{t('vulnerabilityManagement')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('title')}
            <span className="highlight">  {t('subtitle')} </span>
          </h3>
          <ul className="proj-content">
            <li>
            {t('description')}
            </li>
          </ul>

          <div className="heading-sm">{t('heading')}</div>
          <div className="features">
            <span>{t('feature1')}</span>
            <span>{t('feature2')}</span>
            <span>{t('feature3')}</span>
            <span>{t('feature4')}</span>
            <span>{t('feature5')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('selfService')}
            <span className="highlight"> {t('portal')} </span>
          </h3>
          <ul className="proj-content">
            <li>
            {t('selfServicePortal')}
            </li>
          </ul>

          <div className="heading-sm">{t('heading')}</div>
          <div className="features">
          <span>{t('requestAccessGitLab')}</span>
      <span>{t('requestAccountCreationJupyter')}</span>
      <span>{t('managePasswordChangesActiveDirectory')}</span>
      <span>{t('managePasswordChangesExtranet')}</span>
      <span>{t('submitSoftwareInstallationRequests')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('database')}
            <span className="highlight"> {t('Monitoring')} </span>
            {t('Tool')}
          </h3>
          <ul className="proj-content">
            <li>
            {t('databaseMonitoringDescription')}
            </li>
          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('featuree1')}</span>
        <span>{t('featuree2')}</span>
        <span>{t('featuree3')}</span>
        <span>{t('featuree4')}</span>
        <span>{t('featuree5')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('dirprod')}
            <span className="highlight"> {t('Bot')} </span>
          </h3>
          <ul className="proj-content">
            <li>
            {t('description2')}
            </li>
          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('remoteWorkChatbot')}</span>
        <span>{t('employeeEngagement')}</span>
        <span>{t('adminDashboard')}</span>
        <span>{t('realTimeInsights')}</span>
        <span>{t('enhancedCommunication')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('cockpit')}
            
            <span className="highlight"> {t('Tools')} </span>
          </h3>
          <ul className="proj-content">
            <li>
            {t('cockpitToolsDescription')}
            </li>
          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('apiIntegration')}</span>
<span>{t('realTimeDataSync')}</span>
<span>{t('biDirectionalCommunication')}</span>
<span>{t('automatedProcesses')}</span>
<span>{t('enhancedEfficiency')}</span>
<span>{t('customizableMapping')}</span>
          </div>

        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('game')}
            <span className="highlight"> {t('management')} </span>
            {t('system')}
          </h3>
          <ul className="proj-content">
          <li>{t('gameManagementSystem')}</li>
          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('individualizedDashboards')}</span>
<span>{t('realTimeUpdates')}</span>
<span>{t('UserManagement')}</span>
<span>{t('eventRegistration')}</span>
<span>{t('venueManagement')}</span>
          </div>
        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('as400')}
            <span className="highlight"> {t('automation')} </span>
            (BSF)
          </h3>
          <ul className="proj-content">
          <li>{t('bsfDescription')}</li>

          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('ffeature1')}</span>
<span>{t('ffeature2')}</span>
<span>{t('ffeature3')}</span>
<span>{t('ffeature4')}</span>

          </div>
        </div>

        <div className="proj">
          <h3 className="developmentpage-h2">
          {t('meapal')}
            <span className="highlight"> {t('erpnxt')} </span>
          </h3>
          <ul className="proj-content">
          <li>{t('erp_description')}</li>

          </ul>

          <div className="heading-sm">{t('featuresHeading')}</div>
          <div className="features">
          <span>{t('sales_crm')}</span>
<span>{t('purchasing_supply_chain')}</span>
<span>{t('manufacturing')}</span>
<span>{t('project_management')}</span>
<span>{t('business_intelligence_reporting')}</span>
<span>{t('e_commerce_integration')}</span>

          </div>

        </div>
      </div>
    );
  }
  export default DevelopmentWorks;
