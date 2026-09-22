import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import { services, serviceCategories } from "@/content/services/services";

export default function ServiceCategories() {
  return (
    <>
      {serviceCategories.map((category, index) => {
        const categoryServices = services.filter(
          (service) => service.category === category
        );

        return (
          <section
            key={category}
            className={`py-16 sm:py-20 ${index % 2 === 1 ? "bg-slate-50" : ""}`}
          >
            <Container>
              <SectionHeading title={category} />
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} detailed />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
