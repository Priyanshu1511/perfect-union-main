import { CheckCircle2, Zap, Shield } from 'lucide-react';

export default function ServicesPage() {
  const coreValues = [
    {
      icon: CheckCircle2,
      title: 'Accuracy',
      description: 'Precise technical assessment and regulatory compliance',
    },
    {
      icon: Zap,
      title: 'Transparency',
      description: 'Clear communication and honest advisory approach',
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Regulation-aligned solutions and best practices',
    },
  ];

  const technicalCompetencies = [
    'Hydrogeological investigations',
    'Groundwater impact assessments',
    'Water audit and compliance studies',
  ];

  const regulatoryKnowledge = [
    'CGWA and SGWA guidelines',
    'NOC applications and renewals',
    'Compliance monitoring and advisory',
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-blue-50 p-8 rounded-xl border border-blue-100 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Expertise</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Technical Competence</h4>
              <ul className="space-y-3">
                {technicalCompetencies.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Regulatory Knowledge</h4>
              <ul className="space-y-3">
                {regulatoryKnowledge.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
