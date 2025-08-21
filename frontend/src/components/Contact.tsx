import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "galidevaravenkatalokesh05@gmail.com",
      href: "mailto:galidevaravenkatalokesh05@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9347947853",
      href: "tel:+919347947853"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amalapuram, AP",
      href: "https://maps.google.com/?q=Amalapuram,+Andhra+Pradesh"
    }
  ];

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // basic validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { firstName, lastName, email, phone, subject, message } = formData;

  if (!firstName || !lastName || !email || !subject || !message) {
    toast.error("Please fill in all required fields.");
    return;
  }

  if (!isValidEmail(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  // ✅ Phone validation (only if provided)
  if (phone && !/^[0-9]{10}$/.test(phone)) {
    toast.error("Phone number must be exactly 10 digits.");
    return;
  }

  try {
    setLoading(true);
    const response = await axios.post(
      "https://my-portfoilio-pr55.onrender.com/api/contact",
      { firstName, lastName, email, phone, subject, message }
    );

    toast.success(response.data.message || "Message sent successfully!");

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

  } catch (error) {
  if (error.response?.data?.error) {
    toast.error(error.response.data.error); // show backend validation errors
  } else {
    toast.error("Something went wrong. Please try again later.");
  }
}
 finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-slide-in">
              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your First Name"
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your Last Name"
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Yourmail@gmail.com"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone (optional)
                      </label>
                      <Input 
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="border-primary/20 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-3"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="w-6 h-6 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin shadow-md"></span>
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with passionate teams. 
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="border-primary/10 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="font-medium text-foreground mb-4">
                  Let's Build Something Amazing
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm passionate about creating innovative solutions that make a difference. 
                  Ready to discuss your next project? Let's connect and bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
