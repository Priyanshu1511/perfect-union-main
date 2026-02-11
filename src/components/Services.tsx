import { Droplets, FileText } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Our Services</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive groundwater management and regulatory compliance management
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Groundwater NOC Services</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Groundwater NOC – Exemption, New Application & Renewal</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Regularization of Expired Groundwater NOCs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Compliance Monitoring & Annual Returns</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Penalty, Notice & Non-Compliance Advisory</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Studies & Reports</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Impact Assessment Report (IAR)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Groundwater Modelling Report</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Water Audit Report (WAR)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Hydrogeological Investigations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 rounded-2xl shadow-xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg font-medium">Regulatory Compliance Focus</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Expert</div>
              <div className="text-lg font-medium">Technical Team</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Ongoing</div>
              <div className="text-lg font-medium">Advisory Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
