// Comprehensive Dynamic AI Product Data Configuration
const productData = {
  'ai-nano': {
    // ============= BASIC METADATA =============
    metadata: {
      name: 'AI Nano',
      subtitle: 'Compact Micro Intelligence Platform',
      description: 'Revolutionary nanosatellite-style AI platform designed for embedded AI applications, IoT edge computing, and compact AI deployments with advanced miniaturized neural architectures.',
      icon: 'ri-microscope-line',
      category: 'Micro AI Systems',
      price: '₹2,50,00,000',
      rating: 4.9,
      availability: 'Available for 2025 deployments'
    },

    // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
    contentSections: [
      {
        title: 'Advanced Micro AI Technology',
        content: 'Our AI Nano represents breakthrough micro AI technology, packing advanced neural processing systems into compact form factors. Built for resource-constrained environments, this platform delivers exceptional AI performance in minimal computational footprint.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'Edge AI Deployment',
        content: 'Discover how AI Nano enables breakthrough edge AI deployments through innovative micro-architecture design and efficient resource utilization. This system provides reliable AI intelligence in IoT devices, embedded systems, and remote applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Neural Architecture Integration',
        content: 'Watch comprehensive AI Nano testing procedures and system integration processes. This demonstration covers neural network optimization, embedded deployment strategies, and performance validation for micro AI applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Micro AI Technical Specifications',
        content: 'Comprehensive technical specifications and operational guidelines for AI Nano. Access detailed documentation covering neural architectures, embedded optimization, power management, and deployment requirements.',
        type: 'content-document',
        document: 'assets/docs/ai-nano-technical-specs.pdf'
      },
      {
        title: 'Edge Deployment Guide',
        content: 'Complete edge AI deployment documentation including neural model compression techniques, IoT integration procedures, low-power optimization, and real-time inference capabilities.',
        type: 'content-document',
        document: 'assets/docs/ai-nano-deployment-guide.pdf'
      },
      {
        title: 'Micro AI Safety Protocols',
        content: 'Comprehensive safety protocols for embedded AI systems. Includes model reliability verification, fail-safe mechanisms, ethical AI deployment guidelines, and responsible AI implementation standards.',
        type: 'content-document',
        document: 'assets/docs/ai-nano-safety-compliance.pdf'
      },
      {
        title: 'AI Innovation Frontier',
        content: 'AI Nano is revolutionizing edge intelligence through compact, efficient neural processing. Our micro AI platform democratizes artificial intelligence, enabling cost-effective deployments in IoT ecosystems, smart cities, and autonomous systems.',
        type: 'content-only'
      }
    ],

    // ============= TECHNICAL SPECIFICATIONS =============
    specifications: {
      'Neural Architecture': {
        'Model Size': '1-10M parameters optimized for edge deployment',
        'Memory': '16-256MB onboard memory with efficient compression',
        'Processing Power': '1-16 TOPS neural processing capacity',
        'Communication': 'WiFi/Bluetooth/LoRa connectivity options'
      },
      'Performance': {
        'Accuracy': '95-99% inference accuracy across optimized models',
        'Latency': '10-100ms inference time based on model complexity',
        'Power Consumption': '0.1-2W operational power envelope',
        'Operating Lifetime': '5-10 years in battery-powered applications'
      },
      'Environmental': {
        'Operating Temperature': '-20°C to +75°C industrial range',
        'IP Rating': 'IP65-IP68 for harsh environment operation',
        'Vibration': 'IEC 60721-3-7 compliant up to 5G RMS',
        'EMC Compliance': 'FCC/CE certified for electromagnetic compatibility'
      }
    },

    // ============= MEDIA ASSETS =============
    media: {
      hero: {
        type: 'video',
        src: 'assets/videos/ai-nano-deployment.mp4',
        poster: 'assets/images/ai-nano-hero.jpg',
        alt: 'AI Nano Micro Intelligence Deployment'
      },
      gallery: [
        {
          type: 'image',
          src: 'assets/images/nano-neural.jpg',
          alt: 'Neural Processing Unit',
          caption: 'Advanced neural architecture in compact 1-inch form factor'
        },
        {
          type: 'video',
          src: 'assets/videos/nano-edge-demo.mp4',
          poster: 'assets/images/nano-edge-thumb.jpg',
          alt: 'Edge AI Demonstration',
          caption: 'Real-time edge intelligence processing at low power'
        },
        {
          type: 'image',
          src: 'assets/images/nano-iot.jpg',
          alt: 'IoT AI Integration',
          caption: 'Seamless integration with IoT ecosystems and smart sensors'
        }
      ]
    },

    // ============= FEATURES =============
    features: [
      {
        icon: 'ri-brain-line',
        title: 'Compact Neural Networks',
        description: 'Advanced neural network architectures optimized for micro-deployment',
        benefits: ['1U-6U form factors', 'High model compression', 'Efficient inference']
      },
      {
        icon: 'ri-wifi-line',
        title: 'Edge Communication Suite',
        description: 'Comprehensive connectivity solutions for IoT and edge deployments',
        benefits: ['Multi-protocol support', 'Low-power connectivity', 'Remote management']
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Ultra-Low Power Management',
        description: 'Battery-optimized power systems for extended operational life',
        benefits: ['5+ year battery life', 'Energy harvesting', 'Power optimization']
      },
      {
        icon: 'ri-compass-line',
        title: 'Autonomous Edge Operations',
        description: 'Self-managing edge AI systems with minimal supervision',
        benefits: ['Autonomous updates', 'Self-diagnostics', 'Adaptive learning']
      },
      {
        icon: 'ri-cpu-line',
        title: 'Edge Neural Computing',
        description: 'Specialized processors for efficient edge AI inference',
        benefits: ['Edge-native algorithms', 'Optimized computations', 'Real-time processing']
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Embedded AI Security',
        description: 'Comprehensive security features for protected AI deployments',
        benefits: ['Secure boot', 'Encrypted inference', 'Update verification']
      }
    ],

    // ============= APPLICATIONS =============
    applications: [
      {
        title: 'Smart IoT Devices',
        description: 'Intelligent sensing and processing for connected IoT applications',
        icon: 'ri-device-line',
        benefits: ['Real-time intelligence', 'Edge processing', 'Battery optimization']
      },
      {
        title: 'Industrial Automation',
        description: 'AI-powered monitoring and control for manufacturing processes',
        icon: 'ri-robot-line',
        benefits: ['Predictive maintenance', 'Quality control', 'Process optimization']
      },
      {
        title: 'Smart City Infrastructure',
        description: 'AI-driven city management and environmental monitoring',
        icon: 'ri-building-line',
        benefits: ['Environmental monitoring', 'Traffic management', 'Energy efficiency']
      },
      {
        title: 'Wearable AI',
        description: 'Portable AI solutions for healthcare and personal monitoring',
        icon: 'ri-watch-line',
        benefits: ['Personal health', 'Activity monitoring', 'Emergency detection']
      }
    ],

    // ============= PRICING PACKAGES =============
    packages: [
      {
        name: 'Edge Development Kit',
        price: '₹2,50,00,000',
        duration: '6-month development program',
        coverage: 'Single prototype unit',
        features: [
          'AI Nano development board',
          'Neural network SDK',
          'Edge deployment tools',
          'Documentation and tutorials',
          'Basic cloud connectivity',
          '6 months support'
        ],
        recommended: false
      },
      {
        name: 'Commercial Scale Deployment',
        phone: '₹10,00,00,000',
        duration: '12-month production program',
        coverage: '100-1000 units scaling',
        features: [
          'Custom neural model training',
          'Hardware optimization',
          'Production testing suite',
          'Deployment management tools',
          'Advanced analytics dashboard',
          'Enterprise support package'
        ],
        recommended: true
      },
      {
        name: 'Enterprise AI Infrastructure',
        price: 'Custom Pricing',
        duration: 'Custom development timeline',
        coverage: 'Large-scale IoT deployments',
        features: [
          'Custom neural architectures',
          'Private AI model training',
          'Integrated management platform',
          'Advanced security features',
          'Dedicated engineering support',
          'Regulatory compliance assistance'
        ],
        recommended: false
      }
    ]
  },

  'ai-systems': {
    name: 'AI Systems',
    subtitle: 'Mid-Range Intelligence Platform',
    description: 'Advanced mid-range AI intelligence platform with enhanced processing capabilities, scalable architecture, and comprehensive AI management for enterprise deployments.',
    icon: 'ri-brain-line',
    category: 'AI Intelligence Systems',
    price: 'Starting at ₹25,00,00,000',
    rating: 4.9,
    availability: 'Available for 2025 deployments',

    contentSections: [
      {
        title: 'Advanced AI Intelligence Technology',
        content: 'Our AI Systems represents cutting-edge mid-range AI intelligence technology, incorporating advanced neural processing and scalable architecture. With robust engineering and comprehensive validation, this platform delivers exceptional intelligence performance for enterprise AI applications.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'Extended AI Operations',
        content: 'Discover how AI Systems enables extended intelligence operations through innovative architecture design and enhanced neural processing. This system provides reliable intelligence performance for 5-10 year operational lifetimes in various deployment scenarios.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/L_jWHffIx5E'
      },
      {
        title: 'AI Architecture Integration',
        content: 'Watch comprehensive AI system testing procedures and neural network integration processes. This demonstration covers AI model validation, performance optimization, and enterprise deployment strategies.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/2g811Eo7K8U'
      },
      {
        title: 'Enterprise AI Documentation',
        content: 'Comprehensive technical specifications and operational guidelines for AI Systems. Access detailed documentation covering neural architectures, model management, enterprise integration, and operational procedures.',
        type: 'content-document',
        document: 'assets/docs/ai-systems-technical-manual.pdf'
      },
      {
        title: 'Extended Deployment Planning',
        content: 'Complete AI deployment planning documentation including neural model optimization, enterprise integration procedures, scaling strategies, and long-term operational procedures for AI intelligence platforms.',
        type: 'content-document',
        document: 'assets/docs/ai-systems-deployment-guide.pdf'
      },
      {
        title: 'Enterprise AI Compliance',
        content: 'Comprehensive compliance protocols for AI systems operations. Includes data privacy regulations, ethical AI frameworks, security standards, and international AI governance compliance.',
        type: 'content-document',
        document: 'assets/docs/ai-systems-compliance-framework.pdf'
      },
      {
        title: 'AI Intelligence Revolution',
        content: 'AI Systems is transforming enterprise intelligence through advanced neural processing and scalable architecture. Our platform enables reliable, long-duration AI operations for business intelligence, automation, and decision-making processes.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-brain-line',
        title: 'Advanced Neural Processing',
        description: 'High-performance neural networks and deep learning capabilities',
        benefits: ['Multi-modal processing', 'Scalable architecture', 'Enterprise-grade performance']
      },
      {
        icon: 'ri-rocket-line',
        title: 'AI Acceleration Technology',
        description: 'GPU-accelerated processing for rapid AI inference and training',
        benefits: ['High-speed processing', 'Real-time analytics', 'Scalable performance']
      },
      {
        icon: 'ri-time-line',
        title: 'Extended Operational Life',
        description: 'Designed for 5-10 year operational lifetime with evolution capabilities',
        benefits: ['Long-term ROI', 'Model updates', 'Performance evolution']
      }
    ]
  },

  'ai-mega': {
    name: 'AI Mega',
    subtitle: 'Large-Scale Intelligence Platform',
    description: 'Heavy-duty AI intelligence platform with advanced neural architectures and massive processing capabilities for complex AI applications and deep learning research.',
    icon: 'ri-space-ship-line',
    category: 'Large AI Systems',
    price: 'Starting at ₹200,00,00,000',
    rating: 4.7,
    availability: 'Development phase - 2026 availability',

    contentSections: [
      {
        title: 'Mega-Scale AI Technology',
        content: 'Our AI Mega represents the pinnacle of large-scale AI intelligence engineering, incorporating massive neural architectures and advanced processing capabilities. With cutting-edge technology and extensive validation, this platform enables complex AI applications and research initiatives.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'Large-Scale AI Applications',
        content: 'Discover how AI Mega enables breakthrough large-scale AI applications through massive neural architectures and distributed processing. This system provides reliable intelligence for complex research, enterprise applications, and advanced AI initiatives.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/B1R3dTdcpSU'
      },
      {
        title: 'Neural Architecture Validation',
        content: 'Watch comprehensive mega AI testing procedures and neural network validation processes. This demonstration covers large-scale AI testing protocols, performance benchmarking, and enterprise deployment validation.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/FzCubvpzf84'
      },
      {
        title: 'Large-Scale AI Manual',
        content: 'Comprehensive technical specifications for AI Mega intelligence platform. Access detailed documentation covering massive neural networks, distributed processing, advanced architectures, and large-scale AI applications.',
        type: 'content-document',
        document: 'assets/docs/ai-mega-technical-manual.pdf'
      },
      {
        title: 'Enterprise AI Implementation',
        content: 'Complete enterprise AI implementation planning including massive model training, distributed computing infrastructure, advanced integration procedures, and large-scale operational strategies.',
        type: 'content-document',
        document: 'assets/docs/ai-mega-implementation-guide.pdf'
      },
      {
        title: 'Large-Scale AI Standards',
        content: 'Comprehensive standards and protocols for mega AI operations. Includes enterprise security frameworks, ethical AI guidelines, data governance, and regulatory compliance for large-scale AI deployments.',
        type: 'content-document',
        document: 'assets/docs/ai-mega-standards-framework.pdf'
      },
      {
        title: 'AI Research Frontier',
        content: 'AI Mega is pushing the boundaries of artificial intelligence through massive-scale neural processing. Our platform enables ambitious AI research, enterprise applications, and groundbreaking intelligence capabilities for the future of AI.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-brain-line',
        title: 'Massive Neural Processing',
        description: 'Advanced neural architectures for complex AI applications',
        benefits: ['Billions of parameters', 'Complex AI tasks', 'Research-grade capabilities']
      },
      {
        icon: 'ri-database-2-line',
        title: 'Massive AI Payload Capacity',
        description: 'Support for large AI models and extensive data processing',
        benefits: ['Large-scale models', 'High-volume processing', 'Complex AI workloads']
      },
      {
        icon: 'ri-shield-star-line',
        title: 'Enterprise AI Protection',
        description: 'Advanced security and compliance features for enterprise AI',
        benefits: ['Enterprise security', 'Regulatory compliance', 'Data protection']
      }
    ]
  },

  'ai-momentum': {
    name: 'AI Momentum',
    subtitle: 'High-Performance AI Processing',
    description: 'Advanced AI acceleration system designed for efficient model training, inference optimization, and scalable AI processing with innovative performance management.',
    icon: 'ri-rocket-line',
    category: 'AI Processing Systems',
    price: 'Starting at ₹50,00,00,000',
    rating: 4.8,
    availability: 'Available for integration',

    contentSections: [
      {
        title: 'Advanced AI Acceleration Technology',
        content: 'Our AI Momentum propulsion system represents revolutionary advancement in AI processing technology, featuring high-efficiency neural engines and innovative performance management. With precision engineering and extensive validation, this system delivers exceptional performance for complex AI missions.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'AI Processing Operations',
        content: 'Discover how AI Momentum enables efficient model training and inference through advanced acceleration technology. This system provides variable processing capabilities and optimization strategies for extended AI operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/wbSwFU6tY1c'
      },
      {
        title: 'Neural Engine Testing',
        content: 'Watch comprehensive AI processing testing procedures and neural engine validation. This demonstration covers performance benchmarking, efficiency testing, and optimization validation for AI acceleration systems.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/VBlIvghQTlI'
      },
      {
        title: 'AI Processing Manual',
        content: 'Comprehensive technical specifications for AI Momentum acceleration system. Access detailed documentation covering neural processing performance, acceleration technologies, power management, and integration procedures.',
        type: 'content-document',
        document: 'assets/docs/ai-momentum-technical-manual.pdf'
      },
      {
        title: 'AI Integration Guide',
        content: 'Complete integration documentation for AI Momentum acceleration system including AI model integration procedures, performance optimization techniques, deployment strategies, and operational guidelines.',
        type: 'content-document',
        document: 'assets/docs/ai-momentum-integration-guide.pdf'
      },
      {
        title: 'AI Processing Safety',
        content: 'Comprehensive safety protocols for AI acceleration operations. Includes model validation procedures, ethical AI guidelines, system safety protocols, and responsible AI implementation standards.',
        type: 'content-document',
        document: 'assets/docs/ai-momentum-safety-protocols.pdf'
      },
      {
        title: 'AI Acceleration Innovation',
        content: 'AI Momentum is revolutionizing AI processing through advanced acceleration technology and performance innovation. Our system enables cost-effective AI operations, reducing computational costs while maximizing intelligence capabilities.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-speed-line',
        title: 'High-Performance Processing',
        description: 'Advanced neural processing with optimized performance',
        benefits: ['High throughput', 'Low latency', 'Efficient processing']
      },
      {
        icon: 'ri-rocket-line',
        title: 'Variable AI Performance',
        description: 'Adjustable processing levels for optimal performance balance',
        benefits: ['Scalable performance', 'Energy optimization', 'Adaptive processing']
      },
      {
        icon: 'ri-repeat-line',
        title: 'Continuous AI Learning',
        description: 'Multi-stage training capability for complex AI models',
        benefits: ['Continuous learning', 'Model evolution', 'Adaptive intelligence']
      }
    ]
  },

  'ai-vision-x90': {
    name: 'AI Vision X90',
    subtitle: 'AI-Powered Intelligence System',
    description: 'Revolutionary AI-powered intelligence and guidance system with machine learning capabilities, autonomous decision-making, and enhanced processing for advanced AI applications.',
    icon: 'ri-eye-line',
    category: 'AI Intelligence & Guidance',
    price: 'Starting at ₹15,00,00,000',
    rating: 4.9,
    availability: 'Available for immediate integration',

    contentSections: [
      {
        title: 'AI Intelligence Technology',
        content: 'Our AI Vision X90 represents breakthrough AI-powered intelligence technology, incorporating machine learning algorithms and autonomous decision-making capabilities. With advanced neural processing and real-time intelligence, this system delivers precision AI performance for complex applications.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'Autonomous AI Operations',
        content: 'Discover how AI Vision X90 enables autonomous AI operations through advanced neural algorithms and real-time intelligence processing. This system provides autonomous decision making, adaptive behavior, and intelligent processing capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/RK8xHq6dfAo'
      },
      {
        title: 'AI System Testing',
        content: 'Watch comprehensive AI intelligence testing procedures and neural system validation. This demonstration covers AI testing protocols, performance verification, and autonomous operation testing methodologies.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/hFJHtdIGOJM'
      },
      {
        title: 'AI Intelligence Manual',
        content: 'Comprehensive technical specifications for AI Vision X90 intelligence system. Access detailed documentation covering neural algorithms, autonomous intelligence processes, AI integration procedures, and operational guidelines.',
        type: 'content-document',
        document: 'assets/docs/ai-vision-x90-technical-manual.pdf'
      },
      {
        title: 'Autonomous AI Planning',
        content: 'Complete autonomous AI planning documentation including intelligence configuration, behavioral planning, autonomous decision trees, and operational procedures for AI-guided intelligence systems.',
        type: 'content-document',
        document: 'assets/docs/ai-vision-x90-autonomous-planning.pdf'
      },
      {
        title: 'AI Safety & Ethics',
        content: 'Comprehensive safety protocols for AI Vision X90 intelligence operations. Includes AI failsafe mechanisms, ethical guidelines, autonomous system validation, and safe AI operation protocols.',
        type: 'content-document',
        document: 'assets/docs/ai-vision-x90-safety-framework.pdf'
      },
      {
        title: 'AI Intelligence Revolution',
        content: 'AI Vision X90 is transforming artificial intelligence through autonomous systems and intelligent processing. Our AI-powered platform enables unprecedented intelligence performance, reducing human intervention while increasing operational efficiency.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-brain-line',
        title: 'AI-Powered Intelligence',
        description: 'Machine learning algorithms for autonomous decision making',
        benefits: ['Autonomous operations', 'Intelligent processing', 'Adaptive behavior']
      },
      {
        icon: 'ri-crosshair-line',
        title: 'Precision Intelligence',
        description: 'High-accuracy AI processing with precision control',
        benefits: ['Precision operations', 'Accuracy optimization', 'Intelligent control']
      },
      {
        icon: 'ri-group-line',
        title: 'Multi-Intelligence Coordination',
        description: 'Coordinated multi-AI system operations and intelligence sharing',
        benefits: ['Distributed intelligence', 'System coordination', 'Unified operations']
      }
    ]
  },

  'ai-launch': {
    name: 'AI Launch',
    subtitle: 'Scalable AI Deployment Platform',
    description: 'Next-generation AI deployment platform capable of scaling AI solutions across various environments with cost-effective operations and environmental consciousness.',
    icon: 'ri-rocket-2-fill',
    category: 'AI Deployment Systems',
    price: 'Deployment Services: ₹50,00,00,000 per major deployment',
    rating: 4.6,
    availability: 'First major deployments scheduled for 2026',

    contentSections: [
      {
        title: 'Scalable AI Deployment Technology',
        content: 'Our AI Launch represents next-generation AI deployment technology, featuring advanced scaling systems and cost-effective operations. With innovative engineering and comprehensive validation, this platform enables reliable AI solution deployment at reduced operational costs.',
        type: 'content-image',
        image: 'assets/ai_middle.png'
      },
      {
        title: 'AI Deployment & Scaling Operations',
        content: 'Discover how AI Launch enables cost-effective AI deployment through scalable technology and precision systems. This platform provides reliable AI solution delivery to various environments with rapid scaling capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/u0-pfzKbh2k'
      },
      {
        title: 'AI Platform Validation',
        content: 'Watch comprehensive AI deployment testing procedures and platform validation. This demonstration covers AI testing protocols, scaling validation, and deployment verification for reliable AI operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/WxH4CAlhtiQ'
      },
      {
        title: 'AI Deployment Manual',
        content: 'Comprehensive technical specifications for AI Launch deployment platform. Access detailed documentation covering AI scaling capabilities, deployment procedures, cost optimization, and operational protocols.',
        type: 'content-document',
        document: 'assets/docs/ai-launch-technical-manual.pdf'
      },
      {
        title: 'Scaling Strategy Guide',
        content: 'Complete AI scaling strategy documentation including deployment optimization, resource management, cost analysis, and strategic operational procedures for various AI deployment scenarios.',
        type: 'content-document',
        document: 'assets/docs/ai-launch-scaling-guide.pdf'
      },
      {
        title: 'AI Deployment Compliance',
        content: 'Comprehensive compliance protocols for AI Launch deployment operations. Includes deployment safety procedures, ethical AI guidelines, regulatory compliance, and environmental impact assessments.',
        type: 'content-document',
        document: 'assets/docs/ai-launch-compliance-framework.pdf'
      },
      {
        title: 'AI Scaling Revolution',
        content: 'AI Launch is revolutionizing AI deployment through scalable technology and cost-effective operations. This platform democratizes AI scaling, enabling frequent deployments while reducing environmental impact through sustainable AI practices.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-recycle-line',
        title: 'Scalable AI Technology',
        description: 'Multi-deployment AI scaling for cost reduction and efficiency',
        benefits: ['10x deployment efficiency', 'Rapid scaling', 'Sustainable AI operations']
      },
      {
        icon: 'ri-weight-line',
        title: 'Flexible AI Solutions',
        description: 'Adaptable AI deployments for various solution sizes and requirements',
        benefits: ['Flexible scaling', 'Multi-environment support', 'Efficient resource usage']
      },
      {
        icon: 'ri-leaf-line',
        title: 'Sustainable AI Practices',
        description: 'Environmentally conscious AI deployment and optimization',
        benefits: ['Reduced computational waste', 'Energy-efficient AI', 'Sustainable scaling']
      }
    ]
  }
};

// Export the product data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productData;
}