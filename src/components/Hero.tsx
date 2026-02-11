import { Droplets, Shield, FlaskConical, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Natural Resource{' '}
              <span className="text-blue-600">Solution</span> and Management
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Protecting Natural Resources Through Compliance and Scientific Studies
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Natural Resource Solution and Management (NRSM) is a professional consultancy firm
              based in Jaipur, Rajasthan, providing services in groundwater management, regulatory
              compliance, and scientific studies. Our work is guided by scientific integrity,
              regulatory clarity, and responsible resource management, enabling projects to progress
              while protecting natural resources.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:shadow-lg">
              Contact us for a preliminary compliance review
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center">
              <Droplets className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Regulatory Compliance</h3>
                  <p className="text-sm text-gray-600">Groundwater NOC & Certifications</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Scientific Studies</h3>
                  <p className="text-sm text-gray-600">Impact Assessments & Modelling</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Advisory</h3>
                  <p className="text-sm text-gray-600">Regulatory & Technical Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
