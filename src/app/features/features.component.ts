import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'smart_toy',
      title: 'AI Automation',
      description: 'Automatically generate tests directly from user stories using built-in AI.',
      points: [
        'No extra plugins needed',
        'Smart test case generation',
        'Continuous learning and improvement'
      ]
    },
    {
      icon: 'integration_instructions',
      title: 'Test Management',
      description: 'End-to-end test management from defect tracking through release management.',
      points: [
        'Seamless integration with development',
        'Traceability and reporting',
        'Real-time status dashboards'
      ]
    },
    {
      icon: 'build_circle',
      title: 'Customization',
      description: '',
      points: [
        '✅ Full Module Control – Add, delete, or create entirely new modules/pages (e.g., Test Case Management, Defects, Timesheets, Agile, Workflows) without code.',
        '❌ Jira limits customization to fields & workflows — adding new modules requires developers or external apps.'
      ]
    },
    {
      icon: 'groups',
      title: 'HR & Timesheet Management',
      description: 'Integrated employee tracking and timesheets to streamline team management.',
      points: [
        'Real-time attendance monitoring',
        'Overtime and leave tracking',
        'Payroll integration'
      ]
    },
    {
      icon: 'analytics',
      title: 'Reporting & Analytics',
      description: 'Advanced, customizable reports and analytics for deeper insights.',
      points: [
        'Custom dashboards',
        'Exportable reports',
        'Predictive analytics'
      ]
    },
    {
      icon: 'attach_money',
      title: 'Affordable Pricing',
      description: 'All features included at an affordable $8/user pricing.',
      points: [
        'No hidden fees',
        'Transparent billing',
        'Flexible subscription plans'
      ]
    }
  ];
}
