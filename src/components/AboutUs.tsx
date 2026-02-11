import { CheckCircle2, BarChart3, Droplets } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              About Natural Resource Solution and Management (NRSM)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn about our consultancy firm's expertise, experience, and commitment to professional groundwater management and regulatory compliance.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Expert Consultancy</h3>
                  <p className="text-gray-600 text-sm mt-1">Groundwater & Compliance</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">5+ Years Experience</h3>
                  <p className="text-gray-600 text-sm mt-1">Professional Track Record</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Technical Excellence</h3>
                  <p className="text-gray-600 text-sm mt-1">Scientific Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-center text-lg leading-relaxed">
            Natural Resource Solution and Management (NRSM) is a consultancy firm specializing in groundwater
            management, regulatory compliance, and scientific groundwater studies.
          </p>
          <p className="text-center leading-relaxed">
            We assist projects in navigating the technical and regulatory framework related to CGWA and SGWA Ground
            Water NOCs, groundwater abstraction norms, and compliance requirements.
          </p>
          <p className="text-center leading-relaxed">
            With more than five years of professional experience, NRSM delivers technically sound, regulation-aligned, and
            implementation-ready groundwater management solutions with a strong commitment to environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
