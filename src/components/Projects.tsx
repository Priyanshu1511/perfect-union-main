import { Building2, Zap, Pickaxe, CheckCircle2, Clock, RefreshCw } from 'lucide-react';

export default function Projects() {
  const projectTypes = [
    {
      icon: Building2,
      title: 'Industrial Projects',
      description: 'Manufacturing units, process facilities, and industrial operations requiring groundwater abstraction permits and NOC approvals',
    },
    {
      icon: Zap,
      title: 'Infrastructure Projects',
      description: 'Large-scale commercial, institutional, and infrastructure developments with groundwater extraction and management needs',
    },
    {
      icon: Pickaxe,
      title: 'Mining Projects',
      description: 'Mining and quarry operations requiring groundwater regulatory compliance, dewatering management, and operational support',
    },
  ];

  const supportStages = [
    {
      icon: CheckCircle2,
      title: 'New approvals and initial NOC applications',
    },
    {
      icon: RefreshCw,
      title: 'Renewals and re-certifications',
    },
    {
      icon: Clock,
      title: 'Expired NOC regularization',
    },
    {
      icon: Clock,
      title: 'Ongoing compliance monitoring and advisory',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Projects We Support</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            NRSM provides consultancy services across diverse industries and project types, offering specialized support for
            groundwater regulatory approvals and technical requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projectTypes.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Project Support Stages</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our services support projects at various stages, including new approvals, renewals, expired NOC regularization,
            and ongoing compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {supportStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium">{stage.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
