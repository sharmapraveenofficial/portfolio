export default function Skills() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <hr className="border-gray-200 dark:border-gray-700 mb-8" />
      <div className="space-y-12">
        
        {/* Frameworks & Libraries */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;Frameworks.Libraries /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "NodeJS", "NextJS", "Angular", "ExpressJS", "Bootstrap", "REST API", "Material UI", "Tailwind CSS"].map((skill) => (
              <span key={skill} 
                    className="px-4 py-1.5 rounded-full text-sm
                             bg-gradient-to-r from-blue-50/50 via-blue-50/70 to-blue-50/50
                             dark:from-blue-500/5 dark:via-blue-500/10 dark:to-blue-500/5
                             text-blue-800 dark:text-blue-400
                             border border-blue-100/50 dark:border-blue-500/20
                             shadow-sm hover:shadow-md
                             hover:scale-105 transition-all duration-200
                             cursor-default
                             backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;Languages.Syntax /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["JavaScript", "TypeScript", "C", "C++", "HTML", "CSS", "SASS", "Bash Scripting", "YAML"].map((skill) => (
              <span key={skill} 
                    className="px-4 py-1.5 rounded-full text-sm
                             bg-gradient-to-r from-purple-50/50 via-purple-50/70 to-purple-50/50
                             dark:from-purple-500/5 dark:via-purple-500/10 dark:to-purple-500/5
                             text-purple-800 dark:text-purple-400
                             border border-purple-100/50 dark:border-purple-500/20
                             shadow-sm hover:shadow-md
                             hover:scale-105 transition-all duration-200
                             cursor-default
                             backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;Database.Storage /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firestore", "Redis", "RabbitMQ"].map((skill) => (
              <span key={skill} 
                    className="px-4 py-1.5 rounded-full text-sm
                             bg-gradient-to-r from-green-50/50 via-green-50/70 to-green-50/50
                             dark:from-green-500/5 dark:via-green-500/10 dark:to-green-500/5
                             text-green-800 dark:text-green-400
                             border border-green-100/50 dark:border-green-500/20
                             shadow-sm hover:shadow-md
                             hover:scale-105 transition-all duration-200
                             cursor-default
                             backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;DevTools.Utilities /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["Git", "Bitbucket", "Postman", "VSCode", "MySQL Workbench", "JIRA", "Figma", "Circle-CI", "Newrelic", "DataDog", "Terraform"].map((skill) => (
              <span key={skill} 
                    className="px-4 py-1.5 rounded-full text-sm
                             bg-gradient-to-r from-orange-50/50 via-orange-50/70 to-orange-50/50
                             dark:from-orange-500/5 dark:via-orange-500/10 dark:to-orange-500/5
                             text-orange-800 dark:text-orange-400
                             border border-orange-100/50 dark:border-orange-500/20
                             shadow-sm hover:shadow-md
                             hover:scale-105 transition-all duration-200
                             cursor-default
                             backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Cloud */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;Cloud.Infrastructure /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["GCP", "AWS", "Docker", "Kubernetes", "CloudSQL", "GKE", "App Engine", "S3 Bucket", "Cloud functions", "pub-sub"].map((skill) => (
              <span key={skill} 
                    className="px-4 py-1.5 rounded-full text-sm
                             bg-gradient-to-r from-indigo-50/50 via-indigo-50/70 to-indigo-50/50
                             dark:from-indigo-500/5 dark:via-indigo-500/10 dark:to-indigo-500/5
                             text-indigo-800 dark:text-indigo-400
                             border border-indigo-100/50 dark:border-indigo-500/20
                             shadow-sm hover:shadow-md
                             hover:scale-105 transition-all duration-200
                             cursor-default
                             backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="group">
          <h3 className="text-sm font-medium text-center mb-4">
            <span className="relative inline-flex items-center justify-center
                           font-mono text-gray-500 dark:text-gray-400 px-4">
              &lt;Certifications.Achievements /&gt;
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 
                            bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-4 py-2 rounded-full text-sm
                           bg-gradient-to-r from-teal-50/50 via-teal-50/70 to-teal-50/50
                           dark:from-teal-500/5 dark:via-teal-500/10 dark:to-teal-500/5
                           text-teal-800 dark:text-teal-400
                           border border-teal-100/50 dark:border-teal-500/20
                           shadow-sm hover:shadow-md
                           hover:scale-105 transition-all duration-200
                           cursor-default
                           backdrop-blur-sm
                           flex items-center gap-2">
              <span className="text-yellow-500 animate-pulse">⭐</span>
              Google Cloud Certified - Associate Cloud Engineer
            </span>
          </div>
        </div>

      </div>
    </div>
  );
} 